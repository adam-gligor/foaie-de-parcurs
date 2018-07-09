import DateHelper from '../report-generator/DateHelper';

it('renders without crashing', () => {
    const h = new DateHelper(2018, 1, []);
    expect(h).toBeDefined();
});