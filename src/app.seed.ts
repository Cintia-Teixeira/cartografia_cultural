import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { CategoriesSeed } from './categories/categories.seed';
import { UsersSeed } from './users/users.seed';
import { PinsSeed } from './pins/pins.seed';
import * as mongoose from 'mongoose';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AppSeed {
    constructor(
        private readonly categoriesSeed: CategoriesSeed,
        private readonly usersSeed: UsersSeed,
        private readonly pinsSeed: PinsSeed,
        private readonly configService: ConfigService,
    ) { }

    @Command({
        command: 'create:seeds',
        describe: 'create a app seeds',
        autoExit: true
    })
    async create() {
        await mongoose.connect(this.configService.get<string>('mongourl'));
        const collections = await mongoose.connection.db.listCollections().toArray();
        for (const collection of collections) {
            switch (collection.name) {
                case 'categories':
                    await mongoose.connection.db.dropCollection('categories');
                    break;
                case 'users':
                    await mongoose.connection.db.dropCollection('users');
                    break;
                case 'pins':
                    await mongoose.connection.db.dropCollection('pins');
                    break;
                default:
                    console.log(`The ${collection.name} collection was maintained.`);
            }
        }
        await mongoose.connection.close();
        const categoriesId = await this.categoriesSeed.create();
        const usersId = await this.usersSeed.create(categoriesId);
        const pinsId = await this.pinsSeed.create(categoriesId, usersId);
    }
}