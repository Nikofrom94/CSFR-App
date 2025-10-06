import { ExecFileSyncOptionsWithBufferEncoding } from "child_process"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class AbilityCategory {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()

    @UpdateDateColumn()

    @Column("varchar", { length: 50 })
    name: string

    @Column("varchar", { length: 50 })
    name_en: string

    @Column()
    description: string

    @Column("varchar", { length: 50 })
    cs_page: string
}