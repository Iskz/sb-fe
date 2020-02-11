import React, {useState, useReducer, useEffect} from "react";
import { useStore } from "../../store";
import { addCount, subtractCount } from "../../actions";

function SummaryView() {
    const [{ count }, dispatch] = useStore();

    function handleAddCount() {

        initTableau();
        dispatch(addCount())
    }
    function handleRemoveCount() {
        dispatch(subtractCount())
    }

    function initTableau() {
        var divElement = document.getElementById('viz1580802475494');
        var vizElement = divElement.getElementsByTagName('object')[0];
        vizElement.style.width = '1000px';
        vizElement.style.height = '1227px';
        var scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        vizElement.parentNode.insertBefore(scriptElement, vizElement);
    }

    useEffect(() => {
    }, []);

    return (
        <>
            <h2>Summary View {count}</h2>
            <button onClick={handleAddCount}>Add count</button>
            <div className='tableauPlaceholder' id='viz1580802475494' >
                <object className='tableauViz'>
                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F'/>
                    <param name='embed_code_version' value='3'/>
                    <param name='path' value='shared&#47;5H7PFP2NR'/>
                    <param name='toolbar' value='yes'/>
                    <param name='static_image'
                           value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;5H&#47;5H7PFP2NR&#47;1.png'/>
                    <param name='animate_transition' value='yes'/>
                    <param name='display_static_image' value='yes'/>
                    <param name='display_spinner' value='yes'/>
                    <param name='display_overlay' value='yes'/>
                    <param name='display_count' value='yes'/>
                </object>
            </div>
        </>
    )
}

export default SummaryView;