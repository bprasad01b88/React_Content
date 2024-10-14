import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Col, Container, Row } from 'react-bootstrap';

const Question7 = () => {
    const [items, setItems] = useState([
        { id: "1", text: "Item 1" },
        { id: "2", text: "Item 2" },
        { id: "3", text: "Item 3" },
        { id: "4", text: "Item 4" },
        { id: "5", text: "Item 5" },
        { id: "6", text: "Item 6" },
        { id: "7", text: "Item 7" },
        { id: "8", text: "Item 8" },
        { id: "9", text: "Item 9" },
        { id: "10", text: "Item 10" }
    ]);

    const handleDragEnd = (result) => {
        if (!result.destination) return; // dropped outside the list
        const itemsCopy = [...items];
        const [reorderedItem] = itemsCopy.splice(result.source.index, 1);
        itemsCopy.splice(result.destination.index, 0, reorderedItem);
        setItems(itemsCopy);
    };

    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <DragDropContext onDragEnd={handleDragEnd}>
                            <Droppable droppableId="droppable">
                                {(provided) => (
                                    <ul
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        style={{ listStyle: 'none', padding: 0 }}
                                    >
                                        {items.map((item, index) => (
                                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                            {(provided) => {
                                              console.log('Rendering Draggable:', item.id, index);
                                              return (
                                                <li
                                                  ref={provided.innerRef}
                                                  {...provided.draggableProps}
                                                  {...provided.dragHandleProps}
                                                  style={{
                                                    ...provided.draggableProps.style,
                                                    border: '1px solid #ccc',
                                                    marginBottom: '8px',
                                                    backgroundColor: provided.isDragging ? '#f0f0f0' : 'white',
                                                    padding: '8px',
                                                    borderRadius: '4px',
                                                  }}
                                                >
                                                  {item.text}
                                                </li>
                                              );
                                            }}
                                          </Draggable>
                                        ))}
                                        {provided.placeholder}
                                    </ul>
                                )}
                            </Droppable>
                        </DragDropContext>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Question7