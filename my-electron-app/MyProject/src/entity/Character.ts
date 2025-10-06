import { ExecFileSyncOptionsWithBufferEncoding } from "child_process"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinTable, ManyToMany } from "typeorm"
import { Ability } from "./Ability"
import { Descriptor } from "./Descriptor"
import { Focus } from "./Focus"
import { Flavor } from "./Flavor"
import { Skill } from "./Skill"

@Entity()
export class Character {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()

    @UpdateDateColumn()

    @Column("varchar", { length: 50 })
    name: string

    @Column({default:"1"})
    tier: number

    @ManyToMany(() => Descriptor)
    @JoinTable()
    descriptors: Descriptor[]

    @ManyToMany(() => Ability)
    @JoinTable()
    abilities: Ability[]

    @ManyToMany(() => Skill)
    @JoinTable()
    skills: Skill[]

    @ManyToMany(() => Focus)
    @JoinTable()
    focus: Focus[]
    
    @ManyToMany(() => Flavor)
    @JoinTable()
    flavor: Flavor[]

    @Column("int")
    might

    @Column("int")
    speed

    @Column("int")
    intellect

    @Column("int")
    might_edge

    @Column("int")
    speed_edge

    @Column("int")
    intellect_edge

    @Column("int")
    max_cyphers


}
