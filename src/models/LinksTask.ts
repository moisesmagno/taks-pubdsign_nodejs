import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

import Task from './Task';

@Entity('links_task')
class LinksTask {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Task, task_id => task_id.links)
    @JoinColumn({ name: 'task_id' })
    task_id: Task;

    @Column()
    name: string;

    @Column()
    url: string;

    @Column()
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default LinksTask;


