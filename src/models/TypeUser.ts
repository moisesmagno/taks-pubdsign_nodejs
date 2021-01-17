import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('types_users')
class TypeUser {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    type_user_code: number;

    @Column()
    description: string;

    @Column()
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    update_at: Date;
}

export default TypeUser;
