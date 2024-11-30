import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E2E38',
    padding: 20,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#5D5D73',
    borderRadius: 10,
    color: '#fff',
    paddingHorizontal: 10,
    height: 40,
    backgroundColor: '#3A3A47',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  infoText: {
    color: '#fff',
    fontSize: 16,
  },
  filterContainer: {
    flexDirection: 'row',
  },
  sortButton: {
    backgroundColor: '#5D5D73',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 5,
  },
  activeSortButton: {
    backgroundColor: '#7B7B9B',
  },
  sortButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#3A3A47',
    borderRadius: 10,
    marginBottom: 20,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  vehicleImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  cardInfo: {
    flex: 1,
  },
  cardText: {
    color: '#fff',
    marginBottom: 5,
  },
  editButton: {
    backgroundColor: '#5D5D73',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});