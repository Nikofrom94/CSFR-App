import { ExecFileSyncOptionsWithBufferEncoding } from "child_process"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, JoinTable, ManyToMany} from "typeorm"
import { DescriptorCharacteristic } from "./DescriptorCharacteristic"
import { InitialLink } from "./InitialLink"


@Entity()
export class Descriptor {

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

    @Column()
    might_modifier: number

    @Column()
    speed_modifier: number

    @Column()
    intellect_modifier: number

    @Column("varchar", { length: 50 })
    cs_page: string
    
    @ManyToMany(() => DescriptorCharacteristic)
    @JoinTable()
    characteristics: DescriptorCharacteristic[]

    @ManyToMany(() => InitialLink)
    @JoinTable()
    abilities_tier6: InitialLink[]
}
