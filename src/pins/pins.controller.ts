import { Controller, Get, Post, Body, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { PinsService } from './pins.service';
import { CreatePinDto } from './dto/create-pin.dto';
import { CreatelocationDto } from './dto/create-location.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ValidateUserGuard } from 'src/auth/validate-user.guard';

@Controller('pins')
export class PinsController {
  constructor(private readonly pinsService: PinsService) {}

  @Post()
  create(@Body() createPinDto: CreatePinDto) {
    return this.pinsService.create(createPinDto);
  }

  @Get()
  findAll() {
    return this.pinsService.findAll();
  }

  @Get('location')
  getlocation(@Body() createlocationDto: CreatelocationDto ) {
    return this.pinsService.getLocation(createlocationDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pinsService.findOne(id);
  }

  @UseGuards(JwtAuthGuard, ValidateUserGuard)
  @Put(':id')
  update(@Param('id') id: string, @Body() updatedPin: CreatePinDto) {
    return this.pinsService.update(id, updatedPin);    
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pinsService.remove(id);
  }
}
