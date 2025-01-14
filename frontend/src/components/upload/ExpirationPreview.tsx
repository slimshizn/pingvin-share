import moment from "moment";

const ExpirationPreview = ({ form }: { form: any }) => {
  const value = form.values.never_expires
    ? "never"
    : form.values.expiration_num + form.values.expiration_unit;
  if (value === "never") return "This share will never expire.";

  const expirationDate = moment()
    .add(
      value.split("-")[0],
      value.split("-")[1] as moment.unitOfTime.DurationConstructor
    )
    .toDate();

  return `This share will expire on ${moment(expirationDate).format("LLL")}`;
};

export default ExpirationPreview;
