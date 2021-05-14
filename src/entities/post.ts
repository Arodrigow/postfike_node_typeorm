import {
    Entity, PrimaryColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne
}
    from "typeorm";
import { User } from "./user";
import { v4 as uuidV4 } from "uuid"

@Entity("posts")
class Post {
    @PrimaryColumn({ type: "uuid" })
    id!: string;

    @Column({ type: "varchar" })
    title!: string;

    @Column({ type: "varchar" })
    category!: string;

    @Column({ type: "varchar", length: 200 })
    description!: string;

    @Column({ type: "datetime" })
    validUntil!: Date;

    @Column({ type: "text" })
    details!: string;

    @Column({ type: "varchar" })
    photos!: string;

    @CreateDateColumn({ type: "datetime", default: "now()" })
    created_at!: Date;

    @UpdateDateColumn({ type: "datetime", default: "now()" })
    updated_at!: Date;

    @ManyToOne(() => User, user => user.posts)
    user!: User;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Post }