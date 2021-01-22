import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('customers')
class Customer {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    avatar: string;
}

export default Customer;
