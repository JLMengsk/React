// import {Fragment} from "react";
import { MouseEvent, useState } from "react";
import styles from "./ListGroup.module.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }) {
  const handleClick = (event: MouseEvent) => console.log(event);
  //   let selectedIndex = 0;
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(0);
  //   const [name, setName] = useState('');
  //   arr[0] // variable(selectedIndex)
  //   arr[1] // update function
  // if (items.length === 0)
  //     return
  //     <>
  //         <h1>List</h1>
  //         <p>No item found</p>
  //     </>;

  // const getMessage = () =>{
  // return items.length === 0 ? <p>No item found</p> : null;
  // }
  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
