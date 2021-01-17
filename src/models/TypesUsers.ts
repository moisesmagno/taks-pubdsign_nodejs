import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity()
class TypesUsers {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    description: string;

    @Column()
    status: number;

    @CreateDateColumn()
    crated_at: Date;

    @UpdateDateColumn()
    update_at: Date;
}

export default TypesUsers;
