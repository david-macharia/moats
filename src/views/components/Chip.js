import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';
import { Grid, GridRow, FormGroup } from 'semantic-ui-react';
import { Label } from 'reactstrap';

import store from "../../min-redux/store/store";

export default function Chips(props) {
 const apps=props.data.app_usage.platform.map((platform,index)=>{
   return { key: index, label: platform }
 })
  const [chipData, setChipData] = React.useState(apps);

  const handleDelete = (chipToDelete) => () => {


    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    onDeletePlatform(chipToDelete.label)
  };
  const onDeletePlatform=props.onDeletePlatform;

  return (

<FormGroup>
{chipData.length>0?<Label htmlFor="select">Current plartform supported</Label>:null}
<br/>
{chipData.map((data) => {
      let icon;

      if (data.label === 'React') {
        icon = <TagFacesIcon />;
      }

      return (
        <Chip
          key={data.key}
          icon={icon}
          style={{margin:"5px"}}
          label={data.label}
          onDelete={data.label === 'React' ? undefined : handleDelete(data)}

        />
      );
    })
}

</FormGroup>


  );
}
