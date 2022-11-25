import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Category } from './Category';

@Entity()
export class Post {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column("text")
    content: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    // --> plusieurs Posts appartiennent à 1 Category
    // <-- 1 Category peut avoir plusieurs Posts
    @ManyToOne(() => Category, null, { onDelete: 'SET NULL', cascade: ["insert"] })
    category: Category
}