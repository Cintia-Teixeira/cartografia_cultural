import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { CategoriesSeed } from './seeds.categories';
import { UsersSeed } from './seeds.users';
import { PinsSeed } from './seeds.pins';
import * as mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { EventsSeed } from './seeds.events';


@Injectable()
export class AppSeed {
    constructor(
        private readonly configService: ConfigService,
        private readonly categoriesSeed: CategoriesSeed,
        private readonly usersSeed: UsersSeed,
        private readonly pinsSeed: PinsSeed,
        private readonly eventsSeed: EventsSeed,
    ) { }

    @Command({
        command: 'create:seeds',
        describe: 'create a app seeds',
        autoExit: true
    })
    async create() {
        await mongoose.connect(this.configService.get<string>('mongourl'));
        const db = mongoose.connection.db;
        for (const collection of await db.listCollections().toArray())
            switch (collection.name) {
                case 'categories': await db.dropCollection('categories'); break;
                case 'users': await db.dropCollection('users'); break;
                case 'pins': await db.dropCollection('pins'); break;
                case 'events': await db.dropCollection('events'); break;
                default: console.log(`The ${collection.name} collection was maintained.`);
            }
        await mongoose.connection.close();
        const categoriesId = await this.categoriesSeed.create();
        const usersId = await this.usersSeed.create(categoriesId);
        const pinsId = await this.pinsSeed.create(categoriesId, usersId);
        const eventsId = await this.eventsSeed.create(categoriesId, usersId);
    }
}