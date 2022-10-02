import { atom } from 'recoil';

interface ITechnicalInterventionForm {
  state_id: string;
  city_id: string;
  maintenance_type_id: string;
  title: string;
  impact: string;
  description: string;
}

export const TIFormMainInfoData = atom<ITechnicalInterventionForm>({
  key: 'TI.Form.MainInfoData',
  default: {
    state_id: '',
    city_id: '',
    maintenance_type_id: '',
    title: '',
    impact: '',
    description: '',
  },
});

export const TIFormPeriods = atom<Object[]>({
  key: 'TI.Form.Periods',
  default: [],
});

export const TIFormActiveStep = atom({
  key: 'TI.Form.ActiveStep',
  default: 0,
});
