import { ExecFileSyncOptionsWithBufferEncoding } from "child_process"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinTable, ManyToMany } from "typeorm"
import { Ability } from "./Ability"

@Entity()
export class Focus {

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

    @ManyToMany(() => Ability)
    @JoinTable()
    abilities_tier1: Ability[]

    @ManyToMany(() => Ability)
    @JoinTable()
    abilities_tier2: Ability[]

    @ManyToMany(() => Ability)
    @JoinTable()
    abilities_tier3: Ability[]

    @ManyToMany(() => Ability)
    @JoinTable()
    abilities_tier4: Ability[]

    @ManyToMany(() => Ability)
    @JoinTable()
    abilities_tier5: Ability[]

    @ManyToMany(() => Ability)
    @JoinTable()
    abilities_tier6: Ability[]
    
    characters: any
}
