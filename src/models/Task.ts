import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    ManyToOne,
    JoinColumn,
    OneToMany,
} from 'typeorm';

import User from './User';
import Customer from './Customer';
import Frame from './Frame';
import LinksTask from './LinksTask';

@Entity('tasks')
class Task {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column('timestamp with time zone')
    deadline: Date;

    @Column()
    description: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'create_user_id' })
    create_user_id: User;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'responsible_user_id' })
    responsible_user_id: User;

    @ManyToOne(() => Customer)
    @JoinColumn({ name: 'customer_id' })
    customer_id: Customer;

    @ManyToOne(() => Frame)
    @JoinColumn({ name: 'frame_current_id' })
    frame_current_id: string;

    @Column()
    status: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => LinksTask, links => links.task_id, { eager: true })
    links: LinksTask[];
}

export default Task;
