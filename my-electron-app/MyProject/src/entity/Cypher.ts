import { ExecFileSyncOptionsWithBufferEncoding } from "child_process"
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn} from "typeorm"


@Entity()
export class Cypher {

    @PrimaryGeneratedColumn()
    id: number

    @CreateDateColumn()

    @UpdateDateColumn()

    @Column("varchar", { length: 50 })
    name: string

    @Column("varchar", { length: 50 })
    name_en: string

    @Column()
    effect: string

    @Column()
    hint: string

    @Column()
    table: string

    @Column("varchar", { length: 50 })
    cs_page: string

    @Column("varchar", { length: 1 })
    level: string
    
    @Column({type:"boolean",default:"true"})
    is_manifeste: boolean

    @Column({type:"boolean",default:"false"})
    is_fantastic: boolean

    @Column({type:"boolean",default:"false"})
    is_subtle: boolean
    
}
