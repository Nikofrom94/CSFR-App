import { ExecFileSyncOptionsWithBufferEncoding } from "child_process"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, Index } from "typeorm"

@Entity()
export class AbilityCategory {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()

    @UpdateDateColumn()

    @Column("varchar", { length: 50 })
    @Index(["name"], { unique: true })
    name: string

    @Column("varchar", { length: 50 })
    @Index(["name_en"], { unique: true })
    name_en: string

    @Column({ type: "varchar", nullable: true})
    description: string

    @Column("varchar", { length: 50,  nullable: true })
    cs_page: string
}