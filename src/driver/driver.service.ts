import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { DriverDto, FindAllParameters } from './driver.dto';

@Injectable()
export class DriverService {

    private drivers: DriverDto[] = [];

    create(driver: DriverDto){
        this.drivers.push(driver);
        console.log(this.drivers);
    }

    findById(driverId: string) : DriverDto{
        const foundDriver = this.drivers.filter(driver => driver.driverId === driverId);
        
        if (foundDriver.length) {
            return foundDriver[0];
        }

        throw new NotFoundException(`Driver with ID ${driverId} not found`);
    }

    findAll(params: FindAllParameters): DriverDto[] {
        return this.drivers.filter(d => {
            let match = true;

            if (params.firstName && !d.firstName.includes(params.firstName)) {
                match = false;
            }
            
            if (params.surname && !d.surname.includes(params.surname)) {
                match = false;
            }

            return match;
            
        })
    }

    update(driver: DriverDto) {
        let driverIndex = this.drivers.findIndex(d => d.driverId === driver.driverId);

        if(driverIndex >= 0){
            this.drivers[driverIndex] = driver;
            return;
        }

        throw new HttpException(`Driver with ID ${driver.driverId} not found`, HttpStatus.BAD_REQUEST);
    }

    remove(driverId: String){
        let driverIndex = this.drivers.findIndex(d => d.driverId === driverId);

        if(driverIndex >= 0){
            this.drivers.splice(driverIndex, 1);
            return;
        }

        throw new HttpException(`Driver with ID ${driverId} not found`, HttpStatus.BAD_REQUEST);
    }
}
