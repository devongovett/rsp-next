import NotFound from '@spectrum-icons/illustrations/NotFound';
import React from 'react';
import Head from 'next/head';
import {
  SSRProvider,
  ActionButton,
  Button,
  LogicButton,
  ActionGroup,
  ToggleButton,
  Breadcrumbs,
  ButtonGroup,
  ContextualHelp,
  Flex,
  Form,
  Heading,
  Text,
  IllustratedMessage,
  Image,
  Item,
  Section,
  Link,
  ListBox,
  Menu,
  MenuTrigger,
  NumberField,
  Picker,
  TextField,
  RadioGroup,
  Radio,
  SearchField,
  StatusLight,
  Switch,
  View,
  Content,
  Well,
  Checkbox,
  Dialog,
  DialogTrigger,
  DialogContainer,
  Divider,
  ProgressBar,
  ProgressCircle,
  Meter,
  Tooltip,
  TooltipTrigger,
  Slider,
  RangeSlider,
  Provider,
  Tabs,
  TabList,
  TabPanels,
  defaultTheme,
  ComboBox,
  TableView,
  TableHeader,
  TableBody,
  Row,
  Column,
  Cell,
  Footer,
  DatePicker, DateRangePicker, DateField, TimeField
} from '@adobe/react-spectrum';
import {ColorField, ColorSlider, ColorWheel, ColorArea} from '@react-spectrum/color';
import {Accordion} from '@react-spectrum/accordion';
import CopyIcon from '@spectrum-icons/workflow/Copy';
import DeleteIcon from '@spectrum-icons/workflow/Delete';
import DrawIcon from '@spectrum-icons/workflow/Draw';
import DuplicateIcon from '@spectrum-icons/workflow/Duplicate';
import MoveIcon from '@spectrum-icons/workflow/MoveTo';
import {ActionMenu} from '@react-spectrum/menu';
import {SearchWithin} from '@react-spectrum/searchwithin';
import {CardView, Card, GridLayout} from '@react-spectrum/card';
import {ListView} from '@react-spectrum/list';
import {Avatar} from '@react-spectrum/avatar';
import {SearchAutocomplete} from '@react-spectrum/autocomplete';
import {TagGroup} from '@react-spectrum/tag';
import {isWeekend} from '@internationalized/date';

let sections = [
  {name: 'Animals', children: [
    {name: 'Aardvark'},
    {name: 'Kangaroo'},
    {name: 'Snake'}
  ]},
  {name: 'People', children: [
    {name: 'Danni'},
    {name: 'Devon'},
    {name: 'Ross'}
  ]}
];

export let cards = [
  {width: 1001, height: 381, src: 'https://i.imgur.com/Z7AzH2c.jpg', title: 'Bob 1'},
  {width: 640, height: 640, src: 'https://i.imgur.com/DhygPot.jpg', title: 'Joe 1'},
  {width: 182, height: 1009, src: 'https://i.imgur.com/L7RTlvI.png', title: 'Jane 1'},
  {width: 1516, height: 1009, src: 'https://i.imgur.com/1nScMIH.jpg', title: 'Bob 2'},
  {width: 640, height: 640, src: 'https://i.imgur.com/DhygPot.jpg', title: 'Joe 2'},
  {width: 1516, height: 1009, src: 'https://i.imgur.com/1nScMIH.jpg', title: 'Jane 2'},
  {width: 1001, height: 381, src: 'https://i.imgur.com/Z7AzH2c.jpg', title: 'Bob 3'},
  {width: 182, height: 1009, src: 'https://i.imgur.com/L7RTlvI.png', title: 'Joe 3'},
  {width: 1215, height: 121, src: 'https://i.imgur.com/zzwWogn.jpg', title: 'Jane 3'},
  {width: 1516, height: 1009, src: 'https://i.imgur.com/1nScMIH.jpg', title: 'Bob 4'},
  {width: 182, height: 1009, src: 'https://i.imgur.com/L7RTlvI.png', title: 'Joe 4'},
  {width: 1001, height: 381, src: 'https://i.imgur.com/Z7AzH2c.jpg', title: 'Jane 4'},
  {width: 182, height: 1009, src: 'https://i.imgur.com/L7RTlvI.png', title: 'Bob 5'},
  {width: 1516, height: 1009, src: 'https://i.imgur.com/1nScMIH.jpg', title: 'Joe 5'},
  {width: 182, height: 1009, src: 'https://i.imgur.com/L7RTlvI.png', title: 'Jane 5'},
  {width: 1516, height: 1009, src: 'https://i.imgur.com/1nScMIH.jpg', title: 'Bob 6'},
  {width: 1215, height: 121, src: 'https://i.imgur.com/zzwWogn.jpg', title: 'Joe 6'},
  {width: 640, height: 640, src: 'https://i.imgur.com/DhygPot.jpg', title: 'Jane 6'},
  {width: 182, height: 1009, src: 'https://i.imgur.com/L7RTlvI.png', title: 'Bob 7'},
  {width: 1001, height: 381, src: 'https://i.imgur.com/Z7AzH2c.jpg', title: 'Joe 7'},
  {width: 1516, height: 1009, src: 'https://i.imgur.com/1nScMIH.jpg', title: 'Jane 7'},
  {width: 1215, height: 121, src: 'https://i.imgur.com/zzwWogn.jpg', title: 'Bob 8'}
];

let rows = [
  {id: 1, name: 'Charizard', type: 'Fire, Flying', level: '67'},
  {id: 2, name: 'Blastoise', type: 'Water', level: '56'},
  {id: 3, name: 'Venusaur', type: 'Grass, Poison', level: '83'},
  {id: 4, name: 'Pikachu', type: 'Electric', level: '100'},
  {id: 5, name: 'Charizard', type: 'Fire, Flying', level: '67'},
  {id: 6, name: 'Blastoise', type: 'Water', level: '56'},
  {id: 7, name: 'Venusaur', type: 'Grass, Poison', level: '83'},
  {id: 8, name: 'Pikachu', type: 'Electric', level: '100'},
  {id: 9, name: 'Charizard', type: 'Fire, Flying', level: '67'},
  {id: 10, name: 'Blastoise', type: 'Water', level: '56'},
  {id: 11, name: 'Venusaur', type: 'Grass, Poison', level: '83'},
  {id: 12, name: 'Pikachu', type: 'Electric', level: '100'}
];

export default function Home() {
  return (
    <SSRProvider>
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/uma8ayv.css" />
      </Head>
      <Provider theme={defaultTheme} minHeight="100%">
        <View padding="size-250">
          <Flex direction="column" alignItems="center" gap="size-250">
            <Form width={300}>
              <Flex>
                <TextField label="First Name" marginEnd="size-100" />
                <TextField label="Last Name" />
              </Flex>
              <TextField label="Street Address" description="Enter your home address" />
              <TextField label="Zip code" errorMessage="Enter a valid zipcode" validationState="invalid" />
              <Picker label="Items" items={sections}>
                {section =>
                  <Section key={section.name} items={section.children} title={section.name}>
                    {item => <Item key={item.name}>{item.name}</Item>}
                  </Section>
                }
              </Picker>
              <ComboBox label="Items" defaultItems={sections}>
                {section =>
                  <Section key={section.name} items={section.children} title={section.name}>
                    {item => <Item key={item.name}>{item.name}</Item>}
                  </Section>
                }
              </ComboBox>
              <NumberField
                label="Price"
                minValue={0}
                formatOptions={{style: 'currency', currency: 'USD'}} />
              <DatePicker label="Birthday" />
              <DateRangePicker label="Range" isDateUnavailable={d => isWeekend(d, 'en-US')} />
              <DateField label="Birthday" />
              <TimeField label="Time" />
              <RadioGroup label="Favorite pet">
                <Radio value="dogs">
                  Dogs
                </Radio>
                <Radio value="cats">
                  Cats
                </Radio>
                <Radio value="dragons">
                  Dragons
                </Radio>
              </RadioGroup>
              <Divider />
              <Switch>Time machine</Switch>
              <Checkbox>Test</Checkbox>
              <SearchField label="Search" />
              <Slider label="Opacity" minValue={0} maxValue={1} step={0.01} formatOptions={{style: 'percent'}} />
              <RangeSlider label="Price range" formatOptions={{style: 'currency', currency: 'USD', minimumFractionDigits: 0}} />
              <ColorSlider defaultValue="hsb(0, 100%, 100%)" channel="hue" />
              <ColorField label="Color" />
            </Form>
            <ColorWheel />
            <ColorArea />
            <SearchWithin label="Search within">
              <SearchField />
              <Picker>
                <Item>All</Item>
                <Item>Campaigns</Item>
                <Item>Locations</Item>
                <Item>Some really long option to test things</Item>
              </Picker>
            </SearchWithin>
            <ContextualHelp>
              <Heading>Test</Heading>
              <Content>Content</Content>
              <Footer><Link>Learn more</Link></Footer>
            </ContextualHelp>
            <StatusLight variant="celery">Valid</StatusLight>
            <View marginBottom="size-250">
              <ButtonGroup>
                <Button variant="cta">Submit</Button>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
              </ButtonGroup>
            </View>
            <View marginBottom="size-250">
              <ButtonGroup orientation="vertical">
                <Button variant="cta">Submit</Button>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
              </ButtonGroup>
            </View>
            <ActionButton>Action!</ActionButton>
            <ActionButton isQuiet>Quiet Action!</ActionButton>
            <LogicButton variant="and">AND</LogicButton>
            <LogicButton variant="or">OR</LogicButton>
            <ToggleButton>Toggle me</ToggleButton>
            <ToggleButton isQuiet>Toggle me</ToggleButton>
            <ToggleButton isEmphasized>Toggle me</ToggleButton>
            <View backgroundColor="static-seafoam-600" padding="size-1000">
              <Flex direction="column" rowGap="size-150">
                <ToggleButton staticColor="white">Toggle me</ToggleButton>
                <ToggleButton staticColor="white" isQuiet>Toggle me</ToggleButton>
              </Flex>
            </View>
            <Well>Well well well</Well>
            <ProgressBar label="Progress" value={33} />
            <ProgressBar aria-label="Progress" isIndeterminate />
            <ProgressCircle aria-label="Loading" value={33} />
            <ProgressCircle aria-label="Loading" isIndeterminate />
            <Meter label="Progress" variant="positive" value={33} />
            <ActionGroup>
              <TooltipTrigger>
                <Item>One</Item>
                <Tooltip>One</Tooltip>
              </TooltipTrigger>
              <Item>Two</Item>
              <Item>Three</Item>
            </ActionGroup>
            <ActionGroup overflowMode="collapse" buttonLabelBehavior="collapse">
              <Item key="edit">
                <DrawIcon />
                <Text>Edit</Text>
              </Item>
              <Item key="copy">
                <CopyIcon />
                <Text>Copy</Text>
              </Item>
              <Item key="delete">
                <Text>Delete</Text>
                <DeleteIcon />
              </Item>
              <Item key="move">
                <MoveIcon />
                <Text>Move</Text>
              </Item>
              <Item key="duplicate">
                <DuplicateIcon />
                <Text>Duplicate</Text>
              </Item>
            </ActionGroup>
            <Breadcrumbs>
              <Item>One</Item>
              <Item>Two</Item>
              <Item>Three</Item>
            </Breadcrumbs>
            <Flex marginTop="size-250" gap="size-100">
              <DialogTrigger isDismissable>
                <ActionButton>Modal</ActionButton>
                <Dialog>
                  <Image slot="hero" src="https://i.imgur.com/Z7AzH2c.png" objectFit="cover" />
                  <Heading>Heading</Heading>
                  <Divider />
                  <Content>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique risus. In sit amet suscipit lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In condimentum imperdiet metus non condimentum. Duis eu velit et quam accumsan tempus at id velit. Duis elementum elementum purus, id tempus mauris posuere a. Nunc vestibulum sapien pellentesque lectus commodo ornare.</Text>
                  </Content>
                </Dialog>
              </DialogTrigger>
              <DialogTrigger type="popover">
                <ActionButton>Popover</ActionButton>
                <Dialog>
                  <Heading>Heading</Heading>
                  <Divider />
                  <Content>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique risus. In sit amet suscipit lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In condimentum imperdiet metus non condimentum. Duis eu velit et quam accumsan tempus at id velit. Duis elementum elementum purus, id tempus mauris posuere a. Nunc vestibulum sapien pellentesque lectus commodo ornare.</Text>
                  </Content>
                </Dialog>
              </DialogTrigger>
              <DialogTrigger type="tray">
                <ActionButton>Tray</ActionButton>
                <Dialog>
                  <Heading>Heading</Heading>
                  <Divider />
                  <Content>
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sit amet tristique risus. In sit amet suscipit lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In condimentum imperdiet metus non condimentum. Duis eu velit et quam accumsan tempus at id velit. Duis elementum elementum purus, id tempus mauris posuere a. Nunc vestibulum sapien pellentesque lectus commodo ornare.</Text>
                  </Content>
                </Dialog>
              </DialogTrigger>
            </Flex>
            <View width={200}>
              <IllustratedMessage>
                <NotFound />
                <Heading>No Results</Heading>
                <Content>See <Link><a href="https://adobe.com" target="_blank">the docs</a></Link> for info.</Content>
              </IllustratedMessage>
            </View>
            <View borderColor="gray-500" borderWidth="thin" width={200}>
              <ListBox items={sections} maxHeight={200}>
                {section =>
                  <Section key={section.name} items={section.children} title={section.name}>
                    {item => <Item key={item.name}>{item.name}</Item>}
                  </Section>
                }
              </ListBox>
            </View>
            <MenuTrigger trigger="longPress">
              <ActionButton>Menu</ActionButton>
              <Menu>
                <Item>One</Item>
                <Item>Two</Item>
                <Item>Three</Item>
              </Menu>
            </MenuTrigger>
            <ActionMenu>
              <Item>One</Item>
              <Item>Two</Item>
              <Item>Three</Item>
            </ActionMenu>
            <TableView selectionMode="multiple" selectionStyle="highlight" width={800} height={400} marginY={500} onAction={key => alert('Opening ' + rows[key - 1].name + '...')}>
              <TableHeader>
                <Column key="name">Name</Column>
                <Column key="type" width={200}>Type</Column>
                <Column key="level" width={100} align="end">Level</Column>
              </TableHeader>
              <TableBody items={rows}>
                {row => <Row>
                  {columnKey => <Cell>{row[columnKey]}</Cell>}
                </Row>}
              </TableBody>
            </TableView>
            <Tabs maxWidth={500}>
              <TabList>
                <Item>Tab 1</Item>
                <Item>Tab 2</Item>
              </TabList>
              <TabPanels>
                <Item>Tab 1 contents</Item>
                <Item>Tab 2 contents</Item>
              </TabPanels>
            </Tabs>
            <Accordion>
              <Item title="Item 1">
                Item 1
              </Item>
              <Item title="Item 2">
                Item 2
              </Item>
              <Item title="Item 3">
                Item 3
              </Item>
            </Accordion>
            <CardView selectionMode="multiple" items={cards} layout={GridLayout} width={800} height={400} aria-label="Test CardView">
              {item => (
                <Card key={item.title} textValue={item.title} width={item.width} height={item.height}>
                  <Image src={item.src} />
                  <Heading>{item.title}</Heading>
                  <Text slot="detail">PNG</Text>
                  <Content>Very very very very very very very very very very very very very long description</Content>
                </Card>
              )}
            </CardView>
            <ListView width="250px" aria-label="List view" selectionMode="multiple" selectionStyle="highlight">
              <Item textValue="row1">row 1</Item>
              <Item textValue="row2">row 2</Item>
              <Item textValue="row3">row 3</Item>
            </ListView>
            <Avatar src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/690bc6105945313.5f84bfc9de488.png" size="avatar-size-700" />
            <SearchAutocomplete label="Search with Autocomplete">
              <Item>Aerospace</Item>
              <Item>Mechanical</Item>
              <Item>Civil</Item>
              <Item>Biomedical</Item>
              <Item>Nuclear</Item>
              <Item>Industrial</Item>
              <Item>Chemical</Item>
              <Item>Agricultural</Item>
              <Item>Electrical</Item>
            </SearchAutocomplete>
            <TagGroup isRemovable>
              <Item textValue="row1">item 1</Item>
              <Item textValue="row2">item 2</Item>
              <Item textValue="row3">item 3</Item>
            </TagGroup>
          </Flex>
        </View>
      </Provider>
      <style jsx global>{`
        html, body, #__next {
          width: 100%;
          height: 100%;
          margin: 0;
        }
      `}</style>
    </SSRProvider>
  );
}
