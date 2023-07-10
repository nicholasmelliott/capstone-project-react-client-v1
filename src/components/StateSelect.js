import React from 'react';

const StateSelect = ({ submit, states, className }) => {
  return (
    <form method="post" className={className}>
        <div className="row">
            <label className="col-3 mt-3 d-none d-xl-block" htmlFor="state">Select your state:</label>
            <select className="form-control form-control-lg mt-3 ml-3 mr-3 col-md-8" id="state" name="state" onChange={submit}>
                {states.map((state, i)=>{
                    return (
                        <option key={i} value={state.abbreviation}>{state.name}</option>
                    );
                })}
            </select>
        </div>
    </form>
  );
}

export default StateSelect;
