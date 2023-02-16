import React from "react";


const Personal = ({personalInfo, onChange}) => {
    return (
        <Section
            title="Personal Information"
            direction="column"
        >
        <Input
            onChange={(e) => onChange(e)}
            type="text"
            name="firstName"
            placeholder="First Name"
            value={personalInfo.firstName}
        />
        <Input
            onChange={(e) => onChange(e)}
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={personalInfo.lastName}
        />   
        <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={personalInfo.phone}
        />
        <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="email"
        placeholder="Email"
        value={personalInfo.email}
        />
        <Input
        onChange={(e) => onChange(e)}
        type="text"
        name="address"
        placeholder="Address"
        value={personalInfo.address}
        />


        </Section>
    )
}