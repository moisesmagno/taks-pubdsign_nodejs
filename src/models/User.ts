import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    surname: string;

    @Column()
    avatar: string;

    @Column()
    email: string;

    @Column()
    phone_number: number;

    @Column()
    password: string;

    @Column()
    type_user_id: string;

    @Column()
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default User;
