import './RecordDetails.scss';
import { Button, Form, FloatingLabel } from 'react-bootstrap';
import { useLocation } from 'react-router-dom'
import Record from '../../components/Record/Record';
import Artist from '../../components/Artist/Artist';
import StarRating from '../../components/StarRating/StarRating';


const RecordDetails = ({handleAddRecord, handleRemoveRecord, profile}) => {

  const location = useLocation()
  const record = location.state.record
  console.log(profile.records)

  return (
    <main className='record-details'>
      <div className='album-display row'>
        <h1 className='album-header text-center'>
          Album Details
        </h1>
        <div className='cover-display col-md text-center'>
          <div className='single-record'>
            <div className='record-img'>
              <Record key={record.title} record={record} handleAddRecord={handleAddRecord} handleRemoveRecord={handleRemoveRecord} profile={profile} />
            </div>
          </div>
        </div>
        <div className='details-display col-md'>
          <div className='categories'>
            <div className='artist'><h4>Artist</h4></div>
            <div className='album'><h4>Album</h4></div>
            <div className='year'><h4>Year</h4></div>
            <div className='label'><h4>Label</h4></div>
            <div className='tracklist'> 
              <h4>Tracklist</h4>
            </div>
          </div>
          <div className='release-info'>
            <div className='artist'>
              <h4>Black Sabbath</h4>
            </div>
            <div className='album'>
              <h4>Album</h4>
            </div>
            <div className='year'>
              <h4>1970</h4>
            </div>
            <div className='label'>
              <h4>Warner Bros</h4>
            </div>
            <div className='tracklist'>
              <h6>Black Sabbath</h6>
              <h6>The Wizard</h6>
              <h6>N.I.B.</h6>
              <h6>Evil Woman</h6>
              <h6>Sleeping Village</h6>
              <h6>Warning</h6>
            </div>  
          </div>
        </div>
        <div className='row'>
          <div className='buttons col-xl text-center'>
              <Button 
                onClick={() => handleAddRecord (record)} 
                profile={profile} variant="outline-success">
                Add to Collection</Button>
              <StarRating  />
              <FloatingLabel controlId="reviews" label="Write a Review">
                <Form.Control
                  as="textarea"
                  // placeholder="Write a review here"
                  style={{ height: '100px' }} />
              </FloatingLabel>
            </div>
          </div>
      </div>
    </main>
  )
}

export default RecordDetails;
