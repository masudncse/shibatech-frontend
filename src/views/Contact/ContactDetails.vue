<template>
  <div class="contact-details">
    <a-row>
      <a-col :span="24">
        <a-breadcrumb class="page--title">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item
            ><router-link to="/contacts"
              >Contacts</router-link
            ></a-breadcrumb-item
          >
          <a-breadcrumb-item>Md. Motiur Rahman</a-breadcrumb-item>
        </a-breadcrumb>
      </a-col>
    </a-row>

    <a-layout-content
      :style="{
        background: '#fff',
        padding: '24px',
        margin: 0,
        marginBottom: '15px',
      }"
    >
      <a-row>
        <a-col :span="12">
          <div class="info-block">
            <div class="info-block__icon">
              <a-icon type="user" />
            </div>
            <div class="info-block__info">
              <h5>Md. Motiur Rahman</h5>
              <a
                href="mailto:masud.ncse@gmail.com"
                class="text-black-50 d-block"
                >masud.ncse@gmail.com</a
              >
              <a href="tel:01676717945" class="text-black-50 d-block"
                >01676717945</a
              >
              <a
                href="http://google.com"
                target="_blank"
                class="text-black-50 d-block"
                >google.com</a
              >
            </div>
          </div>
        </a-col>
        <a-col :span="12" align="end">
          <a-button
            type="primary"
            icon="plus"
            @click="$router.push('/contacts/add')"
            >Add Contact</a-button
          >
          <div class="mb-2"></div>
          <a-button @click="$router.push('/contacts/1/edit')">Edit</a-button>
          <a-button class="ml-2">Send Email</a-button>
          <a-dropdown>
            <a-menu slot="overlay">
              <a-menu-item key="1"> Delete Contact </a-menu-item>
              <a-menu-item key="2"> Duplicate </a-menu-item>
              <a-menu-item key="3"> Create Purchase Order </a-menu-item>
            </a-menu>
            <a-button class="ml-2"> More <a-icon type="down" /> </a-button>
          </a-dropdown>
          <a-button-group class="ml-2">
            <a-button>
              <a-icon type="left" />
            </a-button>
            <a-button>
              <a-icon type="right" />
            </a-button>
          </a-button-group>
        </a-col>
      </a-row>
    </a-layout-content>

    <a-layout-content
      :style="{
        background: '#fff',
        padding: '24px',
        margin: 0,
        marginBottom: '15px',
      }"
    >
      <a-menu v-model="current" mode="horizontal" class="border-0">
        <a-menu-item key="details" class="pr-4"> Details </a-menu-item>
        <a-menu-item key="updates"> Updated </a-menu-item>
        <a-menu-item key="products" class="px-4">
          <a-tooltip>
            <template slot="title"> Products </template>
            <a-badge :count="99" :overflow-count="9">
              <a-icon type="import" :style="{ fontSize: '26px' }" />
            </a-badge>
          </a-tooltip>
        </a-menu-item>
        <a-menu-item key="purchase-order" class="px-4">
          <a-tooltip>
            <template slot="title"> Purchase Orders </template>
            <a-badge :count="1254" :overflow-count="9">
              <a-icon type="shop" :style="{ fontSize: '26px' }" />
            </a-badge>
          </a-tooltip>
        </a-menu-item>
        <a-menu-item key="email" class="px-4">
          <a-tooltip>
            <template slot="title"> Emails </template>
            <a-badge :count="5" :overflow-count="9">
              <a-icon type="red-envelope" :style="{ fontSize: '26px' }" />
            </a-badge>
          </a-tooltip>
        </a-menu-item>
      </a-menu>
    </a-layout-content>

    <a-layout-content
      :style="{
        background: '#fff',
        padding: '24px',
        margin: 0,
        minHeight: '280px',
      }"
    >
      <a-form :form="form" :label-col="{ span: 6 }" :wrapper-col="{ span: 12 }">
        <a-card title="Basic Information">
          <a-row :gutter="15">
            <a-col :span="12">
              <a-form-item label="First Name" labelAlign="left" class="mb-2">
                Md. Motiur
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Last Name " labelAlign="left" class="mb-2">
                Rahman
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Office Phone  "
                labelAlign="left"
                class="mb-0"
              >
                +029855989
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Organization Name"
                labelAlign="left"
                class="mb-0"
              >
                ABC Company
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Mobile Phone  	"
                labelAlign="left"
                class="mb-0"
              >
                +8801676717945
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Home Phone" labelAlign="left" class="mb-0">
                +8801785545455
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Title " labelAlign="left" class="mb-0">
                Job Holder
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Secondary Phone "
                labelAlign="left"
                class="mb-0"
              >
                +874555464
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Department " labelAlign="left" class="mb-0">
                Marketing
              </a-form-item>
            </a-col>

            <a-col :span="12">
              <a-form-item label="Fax 	" labelAlign="left" class="mb-0">
                +2005455456
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Primary Email 	"
                labelAlign="left"
                class="mb-0"
              >
                primary@gmail.com
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Date of Birth "
                labelAlign="left"
                class="mb-0"
              >
                13 Jan, 1967
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Assistant " labelAlign="left" class="mb-0">
                Rahamat Ullah
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Assistant Phone"
                labelAlign="left"
                class="mb-0"
              >
                +885241524545
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item
                label="Secondary Email 	"
                labelAlign="left"
                class="mb-0"
              >
                secondary@gmail.com
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Do Not Call" labelAlign="left" class="mb-0">
                Yes
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
        <br />
        <a-card title="Address Details">
          <a-row :gutter="15">
            <a-col :span="24">
              <a-row :gutter="15">
                <a-col :span="12">
                  <a-form-item label="Street" labelAlign="left" class="mb-2">
                    16, Banani Gulshan
                  </a-form-item>
                </a-col>
                <a-col :span="12">
                  <a-form-item label="PO Box" labelAlign="left" class="mb-2">
                    45545
                  </a-form-item>
                </a-col>
              </a-row>
            </a-col>
            <a-col :span="12">
              <a-form-item label="City" labelAlign="left" class="mb-2">
                Dhaka
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="State" labelAlign="left" class="mb-2">
                Dhaka
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Postal Code" labelAlign="left" class="mb-2">
                1205
              </a-form-item>
            </a-col>
            <a-col :span="12">
              <a-form-item label="Country" labelAlign="left" class="mb-2">
                Bangladesh
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
        <br />
        <a-card title="Description Details">
          <a-row :gutter="15">
            <a-col :span="24">
              <a-form-item
                label="Description"
                :label-col="{ span: 3 }"
                :wrapper-col="{ span: 18 }"
                class="mb-0"
                labelAlign="left"
              >
                <p class="mb-0" style="line-height: 1rem">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                  voluptas nostrum commodi ullam aperiam non architecto illum
                  consequuntur facilis reiciendis! Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Accusamus sed expedita
                  temporibus laboriosam quaerat eligendi blanditiis odio impedit
                  ducimus? Aliquam nemo ad repellat illo deserunt, atque, quod
                  perferendis magnam necessitatibus similique cum? Eveniet,
                  aliquam non. Voluptates repellat ullam ut illo iusto nam
                  laborum, commodi recusandae minima impedit saepe aut. Aperiam!
                </p>
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
        <br />
        <a-card title="Profile Picture">
          <a-row :gutter="15">
            <a-col :span="12">
              <a-form-item
                label="Contact Image "
                labelAlign="left"
                class="mb-0"
              >
                <div class="d-flex flex-column align-items-center">
                  <img
                    src="https://cdn.business2community.com/wp-content/uploads/2014/04/profile-picture-300x300.jpg"
                    width="100px"
                    class="img-thumbnail mb-2"
                    alt=""
                  />
                </div>
              </a-form-item>
            </a-col>
          </a-row>
        </a-card>
      </a-form>
    </a-layout-content>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: ["details"],
      id: this.$route.params.id,
      formLayout: "horizontal",
      form: this.$form.createForm(this, { name: "coordinated" }),
      routes: [
        {
          path: "index",
          breadcrumbName: "Home",
        },
        {
          path: "first",
          breadcrumbName: "Contacts",
        },
        {
          path: "second",
          breadcrumbName: "Md. Masudul Kabir",
        },
      ],
    };
  },
  methods: {},
};
</script>