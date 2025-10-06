import { ExecFileSyncOptionsWithBufferEncoding } from "child_process"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinTable, ManyToMany } from "typeorm"
import { AbilityCategory } from "./AbilityCategory"

@Entity()
export class Ability {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()

    @UpdateDateColumn()

    @Column("varchar", { length: 50 })
    name: string

    @Column("varchar", { length: 50 })
    name_en: string

    @Column("varchar", { length: 50 })
    stat_cost: string

    @Column("varchar", { length: 50 })
    stat: string

    @Column()
    description: string

    @Column("varchar", { length: 50 })
    cs_page: string

    @Column("varchar", { length: 1 })
    tier: string
    
    @ManyToMany(() => AbilityCategory)
    @JoinTable()
    abilities_tier6: AbilityCategory[]
    
}
