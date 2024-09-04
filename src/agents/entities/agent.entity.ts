import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Invoice } from 'src/invoices/entities/invoice.entity';
import { AgentsStatus } from '../agents.interfaces';

@Table({
  tableName: 'agents',
  paranoid: true,
})
export class Agent extends Model {
  @Column
  name: string;

  @AllowNull
  @Column(DataType.ARRAY(DataType.STRING))
  contactNumbers: string[];

  @AllowNull
  @Column(DataType.ARRAY(DataType.TEXT))
  addresses: string[];

  @Column({
    type: DataType.ENUM(AgentsStatus.ACTIVE, AgentsStatus.IN_ACTIVE),
    defaultValue: AgentsStatus.ACTIVE,
  })
  status: AgentsStatus;

  @AllowNull
  @ForeignKey(() => Agent)
  @Column
  parentId: number;

  @BelongsTo(() => Agent, 'parentId')
  parent: Agent;

  @HasMany(() => Invoice)
  invoices: Invoice[];
}
