import React from "react";
import moment from "moment";
import { TodoProps } from "../types/todos";
import { Link, match } from "react-router-dom";
import DoneIcon from "@material-ui/icons/Done";
import DeleteIcon from "@material-ui/icons/Delete";
import {
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";

type Props = {
  todos: TodoProps[];
  routeMatch: match<{}>;
  onDelete: (id: number) => Promise<void>;
  onIsDone: (id: number, isDone: boolean) => Promise<void>;
};

const TodosList: React.FC<Props> = ({
  todos,
  routeMatch,
  onDelete,
  onIsDone,
}) => {
  return (
    <List dense={true}>
      {todos &&
        todos.map((todo: TodoProps) => (
          <ListItem key={todo.id}>
            <ListItemAvatar>
              <IconButton
                size="small"
                aria-label="is done?"
                onClick={() => onIsDone(todo.id, !todo.isDone)}
              >
                <Avatar>
                  <DoneIcon color={todo.isDone ? "primary" : "inherit"} />
                </Avatar>
              </IconButton>
            </ListItemAvatar>

            <ListItemText
              primary={
                <Link to={`${routeMatch.url}/${todo.id}`}>{todo.title}</Link>
              }
              secondary={moment(todo.date).format("DD.MM.YYYY")}
            />

            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => onDelete(todo.id)}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
    </List>
  );
};

export default TodosList;
