import NavLink from "../../components/navbar/NavLink";

function ErrorNavLinks() {
  return (
    <div className="flex gap-14 items-center">
      <div className="flex gap-8 items-center justify-center p-4">
        <NavLink link="https://github.com/dev-bams" linkName="github" />
        <NavLink
          link="https://www.linkedin.com/in/khaleed-opeloyeru-064457259/"
          linkName="linkedin"
        />
        <NavLink
          link="https://www.instagram.com/iamkbams/"
          linkName="instagram"
        />
        <NavLink link="https://twitter.com/iamkbams" linkName="x" />
        <NavLink
          link="https://bundleup.us/khaleed"
          linkName="bundleup"
        />
      </div>
    </div>
  );
}

export default ErrorNavLinks;
