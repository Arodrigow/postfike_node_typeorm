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

    @Column({ type: "datetime", nullable: true })
    validUntil!: Date;

    @Column({ type: "text", nullable: true })
    details!: string;

    @Column({ type: "varchar", nullable: true })
    photos!: string;

    @Column({ type: "integer", nullable: true })
    likes!: number;

    @Column({ type: "integer", nullable: true })
    visualizations!: number;

    @CreateDateColumn({ type: "datetime" })
    created_at!: Date;

    @UpdateDateColumn({ type: "datetime" })
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