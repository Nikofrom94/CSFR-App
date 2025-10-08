import { ExecFileSyncOptionsWithBufferEncoding } from "child_process"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinTable, ManyToMany, Index } from "typeorm"
import { AbilityCategory } from "./AbilityCategory"

@Entity()
export class Ability {

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

    @Column("varchar", { length: 50 })
    stat_cost: string

    @Column("varchar", { length: 50 })
    stat: string

    @Column()
    description: string

    @Column("varchar", { length: 50, nullable: true })
    cs_page: string

    @Column("varchar", { length: 1 })
    tier: string
    
    @ManyToMany(() => AbilityCategory)
    @JoinTable()
    categories: AbilityCategory[]
    
}
