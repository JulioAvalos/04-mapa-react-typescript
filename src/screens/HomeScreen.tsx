import { MapView, ReactLogo, SearchBar, BtnMyLocation } from '../components';

export const HomeScreen = () => {
  return (
    <div>
      <MapView />
      <BtnMyLocation/>
      <ReactLogo />
      <SearchBar />
    </div>
  );
};
