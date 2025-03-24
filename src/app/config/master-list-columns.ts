import * as moment from "moment";

export class MasterListColumns {
  public static triplistcolumns = [
    {
      name: 'sNo',
      displayName: 'S.No',
      type: 'number'
    },
    {
      name: 'tripNumber',
      displayName: 'Trip No',
      type: 'string'
    },
    {
      name: 'date',
      displayName: 'Date',
      type: 'string',
      displayFcn: (item: any) => moment(item.createdDate).format("DD-MM-YYYY HH-MM")

    },
    {
      name: 'vehicleNumber',
      displayName: 'Vehicle Number',
      type: 'string',
      align: 'center'
    },
    {
      name: 'customerName',
      displayName: 'Customer Name',
      type: 'string',
      align: 'center'
    },
    {
      name: 'visitingPlace',
      displayName: 'Visiting Place',
      type: 'string',
      align: 'center'
    },
    {
      name: 'driverName', // from_entity_type_code
      displayName: 'Driver Name',
      type: 'string',
      align: 'center'
    },
    {
      name: 'totalRent', // from_entity_code
      displayName: 'Total Rent',
      type: 'string',
      align: 'center'
    },
    {
      name: 'status',
      displayName: 'Status',
      type: 'options',
      badgeColors: {
        INPROGRESS: 'badge badge-light-info',
        APPROVED: "badge badge-light-success",
        FORWARDED: "badge badge-light-secondary",
        REQUESTFORCLARIFICATION: 'badge badge-light-warning'
      }
    }
  ];

}
