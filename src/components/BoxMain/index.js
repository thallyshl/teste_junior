import { useContext } from 'react';
import { Context } from '../../context/Context';
import {
    Container,
    Card,
    CardText
} from './style';




export default () => {

    const {
        pok
    } = useContext(Context);

    return (
        <Container>
            {pok.map((item, index) => {
                return (
                    <Card key={index}>
                        <CardText>{index + 1}. {item.name.toUpperCase()}</CardText>
                    </Card>
                );
            })}
        </Container>
    );
};