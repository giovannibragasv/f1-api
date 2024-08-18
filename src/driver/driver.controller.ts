import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { DriverDto, FindAllParameters } from './driver.dto';
import { DriverService } from './driver.service';

@Controller('driver')
export class DriverController {

    constructor(private driverService: DriverService) {}

    @Post()
    create(@Body() driver: DriverDto){
        this.driverService.create(driver);
    }

    @Get('/:driverId')
    findById(@Param('driverId') driverId: string): DriverDto{
        return this.driverService.findById(driverId);
    }

    @Get()
    findAll(@Query() params: FindAllParameters): DriverDto[] {
        return this.driverService.findAll(params);
    }

    @Put()
    update(@Body() driver: DriverDto){
        this.driverService.update(driver);
    }

    @Delete('/:driverId')
    remove(@Param('driverId') driverId: string){
        return this.driverService.remove(driverId);
    }
}
