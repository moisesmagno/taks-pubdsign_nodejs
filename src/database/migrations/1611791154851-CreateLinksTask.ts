import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export default class CreateLinksTask1611791154851 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'links_task',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'task_id',
                        type: 'uuid',
                        isNullable: false,
                    },
                    {
                        name: 'name',
                        type: 'varchar',
                        isNullable: false,
                    },
                    {
                        name: 'url',
                        type: 'text',
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
            'links_task',
            new TableForeignKey({
                name: 'TaskIdFK',
                columnNames: ['task_id'],
                referencedColumnNames: ['id'],
                referencedTableName: 'tasks',
                // onDelete: 'SET NULL',
                onUpdate: 'cascade',
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('links_task', 'TaskIdFK');
        await queryRunner.dropTable('links_task');
    }
}
