import React from 'react';
import MenuItem from '../menu-items/menu-item.component';
import '../../pages/homepage/home.style.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectDirectorySections } from '../redux/directory/directory.selector';

const Directory = ({ sections }) => {
    return (
        <div className='directory-menu'>
            {
                sections.map(({ id, ...otherSectionProps }) => {
                    return <MenuItem key={id} {...otherSectionProps} />
                })
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);