import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export default class CreateTasks1611780032516 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'tasks',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'deadline',
                        type: 'timestamp with time zone',
                        isNullable: false,
                    },
                    {
                        name: 'description',
                        type: 'text',
                        isNullable: true,
                    },
                    {
                        name: 'create_user_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'responsible_user_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'customer_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'frame_current_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'status',
                        type: 'char',
                        default: 1,
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()',
                    },
                ],
            })
        );

        await queryRunner.createForeignKey(
            'tasks',
            new TableForeignKey({
                name: 'createUserIdFK',
                columnNames: ['create_user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                // onDelete: 'SET NULL',
                onUpdate: 'CASCADE',
            })
        );

        await queryRunner.createForeignKey(
            'tasks',
            new TableForeignKey({
                name: 'ResponsibleUserIdFK',
                columnNames: ['responsible_user_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'users',
                // onDelete: 'SET NULL',
                onUpdate: 'cascade',
            })
        );

        await queryRunner.createForeignKey(
            'tasks',
            new TableForeignKey({
                name: 'CustomerId',
                columnNames: ['customer_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'customers',
                // onDelete: 'SET NULL',
                onUpdate: 'cascade',
            })
        );

        await queryRunner.createForeignKey(
            'tasks',
            new TableForeignKey({
                name: 'FrameCurrentIdFK',
                columnNames: ['frame_current_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'frames',
                // onDelete: 'SET NULL',
                onUpdate: 'cascade',
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('tasks', 'createUserId');
        await queryRunner.dropForeignKey('tasks', 'customerId');
        await queryRunner.dropForeignKey('tasks', 'frameCurrentId');
        await queryRunner.dropTable('tasks');
    }
}
