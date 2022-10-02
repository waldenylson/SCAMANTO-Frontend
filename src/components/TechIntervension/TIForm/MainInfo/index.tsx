import React from 'react';

import { Form } from '@unform/web';

import { useRecoilState, useRecoilValue } from 'recoil';

import api from '../../../../services/api.service';

import SelectInput from '../../../FormComponents/SelectInput';
import SimpleInput from '../../../FormComponents/SimpleInput';

import { TIFormMainInfoData } from '../../recoil.atom';
import { handleUFChange } from '../../../FormComponents/SelectInput/recoil.atom';

import { useStyles } from './style';

const MainInfo: React.FC = () => {
  const classes = useStyles();

  const [mainInfoData, setMainInfoData] = useRecoilState(TIFormMainInfoData);

  const stateID = useRecoilValue(handleUFChange);

  const [states, setStates] = React.useState([{}]);
  const [cities, setCities] = React.useState([{}]);
  const [maintenance, setMaintenance] = React.useState([{}]);

  const handleSubmit = React.useCallback(
    data => {
      setMainInfoData(data);
    },
    [setMainInfoData],
  );

  // Combo tipo-mnt ---------------------------- *
  React.useEffect(() => {
    api.get('/maintenance-types').then(response => {
      const { data } = response;

      const maintenanceMap = data.map((item: any) => {
        const maintenanceObject = {
          value: item.id,
          label: item.name,
        };

        return maintenanceObject;
      });

      setMaintenance(maintenanceMap);
    });
  }, []);

  // Combo estados ----------------------------- *
  React.useEffect(() => {
    api.get('/locations/states').then(response => {
      const { data } = response;

      const statesMap = data[0].map((item: any) => {
        const stateObject = {
          value: item.id,
          label: `${item.name} (${item.abbreviation})`,
        };

        return stateObject;
      });

      setStates(statesMap);
    });
  }, []);

  // Combo cidades ----------------------------- *
  React.useEffect(() => {
    if (stateID) {
      api
        .get('/locations/cities', { params: { state_id: stateID } })
        .then(response => {
          const { data } = response;

          const citiesMap = response.data[0].map((item: any) => {
            const citiesObject = {
              value: item.id,
              label: item.name,
            };

            return citiesObject;
          });

          setCities(citiesMap);
        });
    }
  }, [stateID]);

  return (
    <Form
      onSubmit={handleSubmit}
      className={classes.root}
      noValidate
      autoComplete="off"
      id="TIFormMainInfo"
    >
      <div
        style={{
          width: '90%',
          display: 'flex',
          flexDirection: 'column',
          padding: '20px',
        }}
      >
        <SelectInput
          data={mainInfoData.state_id}
          objectOptions={states}
          selectWidth={250}
          selectName="state_id"
          label="Estado"
        />
        <SelectInput
          data={mainInfoData.city_id}
          objectOptions={cities}
          selectWidth={250}
          selectName="city_id"
          label="Localidade"
          disabled={cities.length <= 1}
        />
        <SelectInput
          selectWidth={253}
          selectName="maintenance_type_id"
          objectOptions={maintenance}
          data={mainInfoData.maintenance_type_id}
          label="Tipo de Manutenção"
        />
        <SimpleInput
          name="title"
          data={mainInfoData.title}
          label="Título"
          inputWidth={500}
        />
        <SimpleInput
          name="impact"
          data={mainInfoData.impact}
          label="Impacto da Manutenção"
          inputWidth={500}
          multiline
        />
        <SimpleInput
          name="description"
          data={mainInfoData.description}
          label="Descrição Manutenção"
          inputWidth={600}
          multiline
        />
      </div>
    </Form>
  );
};

export default MainInfo;
