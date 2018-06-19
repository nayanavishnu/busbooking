import { SearchbusModule } from './searchbus.module';

describe('SearchbusModule', () => {
  let searchbusModule: SearchbusModule;

  beforeEach(() => {
    searchbusModule = new SearchbusModule();
  });

  it('should create an instance', () => {
    expect(searchbusModule).toBeTruthy();
  });
});
