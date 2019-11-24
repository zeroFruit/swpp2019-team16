import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../../common/Button/Button';
import Checkbox from '../../common/Checkbox/Checkbox';
import Heading from '../../common/Heading/Heading';
import PropTypes from 'prop-types';
import './CarpoolRequestSection.css';

const RequestBlock = styled.div``;

CarpoolRequestSection.propTypes = {
  user: PropTypes.object.isRequired,
  fromList: PropTypes.array.isRequired,
  toList: PropTypes.array.isRequired,
  minimumPassenger: PropTypes.array.isRequired,
  onClickRequest: PropTypes.func.isRequired,
};

function CarpoolRequestSection({
  user,
  fromList,
  toList,
  minimumPassenger,
  onClickRequest,
}) {
  const [from, setFrom] = useState(null);
  const [to, setTo] = useState(null);
  const [minPassenger, setMinPassenger] = useState(null);

  const onButtonClickHandler = () => {
    if (
      user === null ||
      from === null ||
      to === null ||
      minPassenger === null
    ) {
      window.alert('Please Check!');
      return;
    }

    onClickRequest({
      userId: 1,
      from: from,
      to: to,
      minimumPassenger: minPassenger,
    });
  };

  return (
    <RequestBlock className="requestBlock">
      <div className="title">
        <Heading title="Carpool Request!" />
      </div>
      <div className="from" data-testid="from">
        <h2>From</h2>
        {fromList &&
          fromList.map(value => (
            <Checkbox
              key={value}
              name={'from'}
              value={value}
              onClick={() => (from === value ? setFrom(null) : setFrom(value))}
              checked={value === from}
            />
          ))}
      </div>

      <div className="to" data-testid="to">
        <h2>To</h2>
        {toList &&
          toList.map(value => (
            <Checkbox
              key={value}
              name={'to'}
              value={value}
              onClick={() => (to === value ? setTo(null) : setTo(value))}
              checked={value === to}
            />
          ))}
      </div>

      <div className="minimumPassenger" data-testid="minimumPassenger">
        <h2>Minimum Passenger</h2>
        {minimumPassenger &&
          minimumPassenger.map(value => (
            <Checkbox
              key={value}
              name={'minimumPassenger'}
              value={value}
              onClick={() =>
                minPassenger === value
                  ? setMinPassenger(null)
                  : setMinPassenger(value)
              }
              checked={value === minPassenger}
            />
          ))}
      </div>
      <div className="button">
        <Button
          id="request-submit-button"
          variant="contained"
          color="primary"
          onClick={onButtonClickHandler}
          children="Carpool Request"
        />
      </div>
    </RequestBlock>
  );
}

export default CarpoolRequestSection;
