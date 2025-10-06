import { ExecFileSyncOptionsWithBufferEncoding } from "child_process"
import { Entity, PrimaryColumn} from "typeorm"


@Entity()
export class Lang {

    @PrimaryColumn("varchar", { length: 50, unique: true })
    name: string
   
}
