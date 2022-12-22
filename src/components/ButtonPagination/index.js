import { useContext } from 'react';
import { Context } from '../../context/Context';
import {
    Button,
    Text
} from './style';


export default ({ text, action }) => {

    const {
        handleNextPagination,
        handlePreviousPagination
    } = useContext(Context);

    return (
        <Button
            onClick={
                (action === 'handleNextPagination') ? handleNextPagination : handlePreviousPagination}
        >
            <Text>
                {text}
            </Text>
        </Button>
    );
};