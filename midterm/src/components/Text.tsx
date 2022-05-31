import PropTypes from 'prop-types'

const Text = (props:Props) => {
    return (<p style={{...props.style, fontSize: props.size == "small" ? 24 : props.size == "medium" ? 36 : 48, color: props.color}}>
        {props.children}
    </p>);
};
interface Props {
    style: object,
    children: React.ReactNode,
    size: string,
    color: string
};

export default Text;