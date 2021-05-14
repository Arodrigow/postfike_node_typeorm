import { PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, Entity, OneToMany } from "typeorm"

import { v4 as uuidV4 } from "uuid";
import { Post } from "./post";

@Entity("users")
class User {

    @PrimaryColumn()
    id!: string;

    @Column()
    name!: string;

    @Column()
    password!: string;

    @Column()
    email!: string;

    @Column()
    phone!: string;

    @CreateDateColumn()
    created_at!: Date;

    @UpdateDateColumn()
    updated_at!: Date;

    @OneToMany(() => Post, post => post.user)
    posts!: Post[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { User };