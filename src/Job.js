import React from 'react';
import { Card } from 'react-bootstrap';

export const Job = ({ job }) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <div class="d-flex justify-content-between">
            <div>
              <Card.Title>
                {job.title}-
                <span className="text-muted font-weigth-light">
                  {job.company}
                </span>
              </Card.Title>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};
