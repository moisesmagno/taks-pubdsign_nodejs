import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
} from 'typeorm';

@Entity('frames')
class Frame {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default Frame;
