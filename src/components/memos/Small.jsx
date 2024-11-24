import PropTypes from "prop-types";
import { memo } from "react";

export const Small = memo( ({value}) => {
    console.log("renderizado otra vez :>")
    return(
        <>
            <small>{value}</small>
        </>
    )
})

Small.propTypes = {
    value: PropTypes.number,
}

Small.displayName = "Small";